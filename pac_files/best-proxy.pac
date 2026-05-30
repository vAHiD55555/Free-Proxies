function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.131.65.246:3128",
        "SOCKS 157.66.36.29:69",
        "SOCKS 119.148.7.10:22122",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 188.191.164.55:4890",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 107.155.15.86:1080",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 141.105.68.238:1080",
        "SOCKS 213.27.29.153:51000",
        "SOCKS 103.157.78.22:8199",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 162.240.96.211:8443",
        "SOCKS 31.25.139.82:21",
        "SOCKS 145.241.117.33:8888",
        "SOCKS 104.236.171.128:41047",
        "SOCKS 195.19.51.79:1080",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 192.236.148.111:443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}