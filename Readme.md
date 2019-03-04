
# External authentication for Ejabberd

This script must be installed on ejabberd server.

External authentication should call `index.js`.

Add hosts and API url in `config.authServiceUrls` (see example config).


Example ejabberd config:

`host_config:
   "localhost":
     auth_method: [external]
     extauth_program: "node /opt/ejabberd/xmpp-auth/index.js"
     extauth_pool_size: 5
     auth_use_cache: false`
