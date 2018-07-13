from flask import Flask, render_template, request, jsonify

# initiate app
app = Flask(__name__)

# starting page
@app.route('/', methods=['GET'])
def index():
    return render_template('main.html')

# python script for when submit button is clicked
@app.route('/submit', methods=['POST'])
def post_result():
    user_input = request.json
    message = "Hello {}!".format(user_input)
    return jsonify({'output': message})


# run app
if __name__ == '__main__':
    app.run(host='0.0.0.0', threaded=True)