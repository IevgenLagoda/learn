from flask import Flask, url_for, render_template, request
# python -m flask run
# export FLASK_APP=app.py
# export FLASK_ENV=development

app = Flask(__name__)

@app.route('/')
@app.route('/index.html')
def index():
    return 'Hello world!'

@app.route('/user/')
@app.route('/user/<username>')
@app.route('/user/<username>.html')
@app.route('/profile/<username>', redirect_to="user/<username>")
def user_profile(username=None):
    return (username or "Guest") + " profile!"

@app.route('/catalog/', defaults={'category_name': 'new', 'product_id': 0})
@app.route('/catalog/<category_name>/product/<int:product_id>')
@app.route('/catalog/<category_name>/product/<int:product_id>.html')
def product_page(category_name, product_id):
    return "Product from category:" + category_name + ", product ID:" + str(product_id) + "<br/>" + "<a href='" + url_for('index')+ "'>Home</a>"

@app.route('/home/')
def home():
    return render_template(
        'home.html',
        title = 'Flask app',
        header = 'Welcome our user!',
        text = 'Page content...'
    )

@app.route('/order/', methods=['GET'])
def order_get():
    id = request.args.get('id', 0)
    print(request.path)
    return "Order " + str(id) + " requested"

@app.route('/order/', methods=['POST'])
def order_set():
    order = {
        'name': request.form.get('name', ''),
        'price': request.form.get('price', 0)
    }
    return "Order created with name " + order.name + " and price " + str(order.price)

@app.route('/report/html')
def report_html():
    return render_template('report.html', orders='4', total='100')

@app.route('/report/json')
def report_json():
    return {'orders': 4, 'total': 100}

@app.route('/not_found')
def not_found():
    return "Ooops!", 404

@app.errorhandler(500)
def page_500(error):
    return "Internal Error"

@app.errorhandler(404)
def page_404(error):
    return "404 Not found"