function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.236.18:3927",
        "SOCKS 212.110.188.211:34409",
        "SOCKS 27.79.244.250:16000",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 160.177.23.210:8080",
        "SOCKS 209.121.164.51:31147",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 77.238.103.98:8080",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 34.131.101.112:3128",
        "SOCKS 27.79.242.170:16000",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 172.104.240.74:9053",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}