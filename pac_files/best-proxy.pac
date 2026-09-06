function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 87.107.68.231:1081",
        "SOCKS 45.74.31.30:8989",
        "SOCKS 195.114.7.6:1080",
        "SOCKS 174.138.162.37:36239",
        "SOCKS 5.249.165.195:20000",
        "SOCKS 45.76.171.230:8181",
        "SOCKS 47.245.165.201:1080",
        "SOCKS 146.190.94.105:1080",
        "SOCKS 45.74.31.30:6401",
        "SOCKS 202.91.41.102:1080",
        "SOCKS 72.56.32.184:1080",
        "SOCKS 223.25.109.163:8199",
        "SOCKS 151.185.59.40:8080",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 130.162.141.185:52916",
        "SOCKS 203.189.150.44:1080",
        "SOCKS 117.244.114.54:1080",
        "SOCKS 178.128.220.224:1080",
        "SOCKS 45.74.31.30:26355",
        "SOCKS 103.161.104.99:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}