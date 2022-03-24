# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

bundle exec rdebug-ide --host 0.0.0.0 --port 1234 --dispatcher-port 26162 -- bin/rails s -p 3000 -b 0.0.0.0

$ docker-compose build --no-cache
$ docker-compose run --rm web bundle install
$ docker-compose up -d

$ docker-compose -f docker-compose.debug.yml up -d
$ docker-compose logs -f