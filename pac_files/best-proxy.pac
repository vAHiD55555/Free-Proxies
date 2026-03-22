function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 38.145.208.253:8443",
        "SOCKS 206.123.156.243:4418",
        "SOCKS 206.123.156.204:9445",
        "SOCKS 38.145.220.34:8443",
        "SOCKS 38.145.208.177:8443",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 206.123.156.223:9492",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 206.123.156.190:4286",
        "SOCKS 154.64.235.206:58367",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 38.145.218.234:8443",
        "SOCKS 103.28.121.58:80",
        "SOCKS 123.54.197.52:21728",
        "SOCKS 192.210.140.36:1080",
        "SOCKS 108.165.20.16:5555",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}