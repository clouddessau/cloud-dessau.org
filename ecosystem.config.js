module.exports = {
  apps : [{
    name: 'cloud-dessau-org',
    script: 'vapid',
    args: 'start /home/cloudde/html',

    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};