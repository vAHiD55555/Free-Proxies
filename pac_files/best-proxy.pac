function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 46.146.210.123:1080",
        "SOCKS 204.44.87.247:8888",
        "SOCKS 23.153.217.115:5555",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 202.58.77.114:8080",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 18.140.56.192:3128",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 136.61.112.82:8080",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 195.211.71.185:443",
        "SOCKS 72.10.160.173:1225",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 218.64.122.99:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}