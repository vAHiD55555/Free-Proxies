function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.192.133.82:1080",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 152.26.14.48:3156",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 47.237.78.78:1111",
        "SOCKS 152.26.14.34:3156",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 47.245.117.43:80",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 103.132.52.20:8080",
        "SOCKS 123.128.12.93:9055",
        "SOCKS 157.180.121.252:13855",
        "SOCKS 157.180.121.252:54151",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 15.235.131.237:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}