function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.128.12.44:3128",
        "SOCKS 177.11.49.41:1088",
        "SOCKS 103.195.6.226:30183",
        "SOCKS 103.187.39.21:1080",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 104.248.59.38:80",
        "SOCKS 103.195.5.78:30060",
        "SOCKS 37.110.225.76:1080",
        "SOCKS 103.195.6.226:30149",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 121.128.121.54:3128",
        "SOCKS 121.128.121.144:3128",
        "SOCKS 13.229.107.106:80",
        "SOCKS 103.195.6.226:30019",
        "SOCKS 107.174.64.118:10081",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 103.195.5.78:30282",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}