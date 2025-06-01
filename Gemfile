source "https://rubygems.org"

# GitHub Pages gem includes Jekyll and all supported plugins
gem "github-pages", "~> 228", group: :jekyll_plugins

# Additional plugins for minimal-mistakes
group :jekyll_plugins do
  gem "jekyll-remote-theme"
  gem "jekyll-include-cache"
end

# For local development
gem "webrick", "~> 1.7" if RUBY_VERSION >= "3.0.0"
