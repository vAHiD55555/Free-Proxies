function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.171.242:14287",
        "SOCKS 120.77.203.0:443",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 202.62.59.218:1080",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 152.53.171.242:10117",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 119.81.71.27:80",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 152.53.171.242:29098",
        "SOCKS 103.82.23.118:6229",
        "SOCKS 152.53.171.242:28445",
        "SOCKS 103.28.121.58:80",
        "SOCKS 3.24.178.81:80",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 213.35.110.67:10809",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 115.127.80.1:9090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}