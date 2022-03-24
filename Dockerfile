FROM ruby:3.1.1

ENV LANG C.UTF-8

RUN apt-get update && apt-get install --qq -y --no-install-recommends nodejs yarn build-essential libpq-dev 

WORKDIR /app

COPY Gemfile* /app
RUN bundle install

COPY . /app

EXPOSE 3000 1234 26162

CMD ["bin/dev"]
