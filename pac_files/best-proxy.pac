function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 49.49.24.86:8080",
        "SOCKS 35.183.64.191:30309",
        "SOCKS 180.149.232.153:61245",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 62.72.30.185:8899",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 177.36.64.129:54003",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 185.93.89.144:8678",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 185.93.89.181:4039",
        "SOCKS 181.214.39.73:5719",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}