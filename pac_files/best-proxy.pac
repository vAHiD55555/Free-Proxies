function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.174.178.131:1020",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 62.60.131.188:4648",
        "SOCKS 103.56.206.77:8099",
        "SOCKS 47.86.41.142:1011",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 146.235.19.84:10801",
        "SOCKS 178.130.47.129:1082",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 167.172.109.12:40825",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 62.60.131.179:4439",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 195.158.10.99:8080",
        "SOCKS 18.141.177.23:80",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 62.60.131.185:4857",
        "SOCKS 36.255.98.160:15455",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}