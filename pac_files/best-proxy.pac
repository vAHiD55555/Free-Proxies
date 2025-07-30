function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.190.36.4:3128",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 72.195.114.169:4145",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 188.166.230.109:31028",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 176.9.164.117:60018",
        "SOCKS 118.68.172.146:16000",
        "SOCKS 27.71.129.176:16000",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 27.79.206.122:16000",
        "SOCKS 184.178.172.5:15303",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}