function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.221.193.221:11217",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 120.77.203.0:443",
        "SOCKS 89.58.45.94:32187",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 185.179.190.163:3128",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 177.234.226.83:1994",
        "SOCKS 128.140.113.110:3128",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 51.15.5.21:60349",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}