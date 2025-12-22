function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.202.243.196:1088",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 152.53.36.101:42223",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 202.72.232.121:1080",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 203.189.152.142:1080",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 139.196.149.166:7897",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 146.190.64.18:20202",
        "SOCKS 51.158.98.211:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}