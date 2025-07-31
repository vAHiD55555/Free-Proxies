function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.71.129.176:16000",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 8.208.94.223:3128",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 27.79.169.244:16000",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 192.177.33.54:8000",
        "SOCKS 58.186.248.96:16000",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 222.59.173.105:44124",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 188.166.230.109:31028",
        "SOCKS 91.214.62.121:8053",
        "SOCKS 117.68.147.8:3000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}