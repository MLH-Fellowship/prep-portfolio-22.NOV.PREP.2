# Portfolio Template

This is a Jekyll website template designed for Prep Fellows.

## Project Setup and Installations
### Ruby and Bundler Installation.
- Follow the steps below to set up Ruby on your local machine depending on the Operating System you are using. You can skip this if you have  Ruby and Bundler installed.

#### Linux

   1. On the terminal run `sudo apt-get update`
   2. Install Ruby by running `sudo apt-get install ruby ruby-dev`
   3. Set up the bundler by using this command `sudo gem install bundler`
   4. Install Dependencies by running `bundle install --path vendor/bundle`.
   5. Then start the server by running `bundle exec jekyll serve`.

   
#### Windows

  1. Open PowerShell terminal and run `gem install bundler`. After the process is completed successfully if the message ‘1 gem installed’ is displayed then the process is completed successfully.
  2. Install Dependencies by running `bundle install --path vendor/bundle`.
  3. Then start the server by running `bundle exec jekyll serve`.

  

#### Mac

  1. Install Ruby Using rvm by running `rvm install ruby`
  2. Make the ruby you have just installed default by using rvm. run `rvm --default use ruby`
  3. Install bundler by running `gem install bundler`
  4. Then install the dependancies by running `bundle install`
  5. Start the server `bundle exec jekyll serve`
  

 &nbsp; &nbsp; &nbsp; &nbsp;  **Alternatively**

  1. Mac comes with a version of Ruby already installed. You can check the version by running `ruby -v`
  2. Install Homebrew package manager by running `(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  3. Use the package manager to install Ruby by running `brew install ruby`
  4. Update PATH by running `echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.bash_profile`. This updates Bash profile but not your current environment. So open a new terminal and run `source ~/.bash_profile` to update your environment.
  5. Install bundler by running `gem install bundler`
  6. Then install the dependancies by running `bundle install`
  7. Start the server `bundle exec jekyll serve`

#### Docker Development Environment
 - Install Docker from the [Docker official page](https://docs.docker.com/engine/install/) 
 ```console
$ git clone https://github.com/MLH-Fellowship/prep-portfolio-22.NOV.PREP.2.git
$ cd prep-portfolio-22.NOV.PREP.2/
$ docker-compose up
```

#### Visual Studio 
 - After forking the repository:
```console
$ git clone https://github.com/Username/prep-portfolio-22.NOV.PREP.2.git
```

  



## Make your own!

1. Use the Template button.
2. Update `_config.yml` to contain your information.
    1. Change `url` to the URL you'll be hosting it at
    2. Make sure it has the /
3. Use something like Netlify or GitHub Pages to deploy (note, this only works on username.github.io, not username.github.io/repo-name)

## Add your portfolio

Head to `_data` and fill out either `projects.yml`, `experience.yml` and `education.yml`.

Project example.
```yaml
- title: Online Shopping Application
  event: MLH Prep - Batch 4.5
  date: Fall 2021
```

Experience example.
```yaml
- role: MLH Prep Fellow
  company: MLH Fellowship
  dates: Summer 2021
  logo: fellowship.svg
```

Education example.
```yaml
- course: Prep Fellow
  institute: MLH Fellowship
  dates: Fall 2021
  logo: fellowship.svg
```
## Add project posts

1. Make a new `.md` file inside of `projects`.
2. Add the header to your markdown file (see below) and change the title to the name of your blog post.
3. Write your project page! Can be a README from GitHub or your Devpost page.
4. Add the `page-name` field to your `projects.yml` (see below).

Top of post markdown file post.
```
---
title: Project
layout: page
---
```

`projects.yml` with the `page-name` field.

```yaml
- title: Online Shopping Application
  event: MLH Prep - Batch 4.5
  date: Summer 2021
  page-name: project
```









