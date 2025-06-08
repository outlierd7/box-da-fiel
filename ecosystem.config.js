module.exports = {
  apps: [{
    name: 'box-ultimaedicao',
    script: 'npm',
    args: 'start',
    cwd: '/home/boxdafiel/public_html/box-ultimaedicao',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3017
    },
    error_file: 'logs/err.log',
    out_file: 'logs/out.log',
    log_file: 'logs/combined.log',
    time: true
  }]
} 