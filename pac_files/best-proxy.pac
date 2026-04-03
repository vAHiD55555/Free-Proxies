function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 65.108.203.36:18080",
        "SOCKS 38.207.164.82:6005",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 178.156.224.42:3128",
        "SOCKS 147.45.60.34:1082",
        "SOCKS 74.103.66.15:80",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 38.34.179.78:8448",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 38.145.220.93:8445",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 45.136.131.41:8448",
        "SOCKS 206.123.156.206:6741",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 206.123.156.205:4538",
        "SOCKS 129.150.55.165:1080",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 38.34.179.21:8443",
        "SOCKS 206.123.156.227:9725",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}