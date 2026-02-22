from flask import Flask, render_template, request, redirect
from blog import Blog
from post import Post
# export FLASK_APP=app.py
# export FLASk_ENV=development
# python -m flask run

app = Flask(__name__)
blog = Blog()

@app.route('/')
def index():
    posts = blog.getPosts(5)
    cal = blog.getMonthCalendar()
    return render_template('index.html', posts = posts, calendar = cal)

@app.route('/post/<sku>.html')
def post_get(sku):
    return render_template('post.html', post = blog.getPostBySku(sku))

@app.route('/post', methods=["POST"])
def post_post():
    title = request.form.get('title', '')
    date = request.form.get('date', '2022-01-01')
    body = request.form.get('body', '')
    blog.addPost(Post(title, date, body))
    return redirect('/posts/%s' % (date))

@app.route('/posts/<date>')
def posts(date):
    return render_template('posts.html', posts = blog.getPostsByDate(date))

