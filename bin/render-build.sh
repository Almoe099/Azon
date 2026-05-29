# old code 

# #!/usr/bin/env bash

# # exit on error
# set -o errexit

# bundle install
# rails db:migrate
# rails db:seed #if needed

# new code

#!/usr/bin/env bash
set -o errexit

bundle install
bundle exec rails assets:precompile
bundle exec rails assets:clean