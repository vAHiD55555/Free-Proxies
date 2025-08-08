function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 49.254.107.184:28766",
        "SOCKS 46.229.64.42:1080",
        "SOCKS 40.71.46.210:8214",
        "SOCKS 173.209.63.67:8173",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 103.195.65.162:8080",
        "SOCKS 117.74.65.207:443",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 114.80.32.8:3081",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 89.58.45.94:43476",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}