function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 171.228.142.176:1001",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 152.53.169.165:1080",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 115.72.40.239:10002",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 51.158.103.0:16379",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 176.9.164.117:60011",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 172.104.240.74:9053",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}