function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 69.164.206.96:13024",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 45.236.215.111:54029",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 43.225.151.129:1121",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 183.80.54.224:1080",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 144.124.227.90:10808",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 128.140.76.145:19633",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 125.141.133.98:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}