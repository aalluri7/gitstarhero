from flask import Flask,request, redirect
import requests
from secrets import client_id, client_secret
app = Flask(__name__)
app.config['DEBUG'] = True

# Note: We don't need to call run() since our application is embedded within
# the App Engine WSGI application server.


@app.route('/')
def hello():
    """Return a friendly HTTP greeting."""
    return 'Hello World!'

def generateToken(code):
    url = 'https://github.com/login/oauth/access_token'
    params = {'client_id': client_id, 'client_secret': client_secret, 'code': code}
    return requests.post(url, params=params).text

@app.route('/gitstarhero/callback')
def callback():
    code = request.args.get('code')
    token = generateToken(code)
    return redirect('https://aalluri7.github.io/gitstarhero/?'+token)

@app.errorhandler(404)
def page_not_found(e):
    """Return a custom 404 error."""
    return 'Sorry, nothing at this URL.', 404
