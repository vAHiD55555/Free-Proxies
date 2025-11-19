function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.58.45.94:46065",
        "SOCKS 120.77.203.0:443",
        "SOCKS 89.58.45.94:34519",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 89.58.45.94:12721",
        "SOCKS 152.53.171.242:13019",
        "SOCKS 18.188.141.177:1145",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 155.94.163.202:1080",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 72.10.160.174:14999",
        "SOCKS 103.188.169.160:7777",
        "SOCKS 89.58.45.94:10385",
        "SOCKS 89.58.45.94:10057",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 89.58.45.94:14485",
        "SOCKS 46.146.220.180:1080",
        "SOCKS 89.58.45.94:28541",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}