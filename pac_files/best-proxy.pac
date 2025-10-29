function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 166.62.35.102:45775",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 138.199.25.13:3903",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 135.181.203.208:80",
        "SOCKS 47.236.30.44:1011",
        "SOCKS 154.21.205.237:8080",
        "SOCKS 47.239.197.248:1100",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 31.193.193.69:1488",
        "SOCKS 152.53.36.101:33265",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 120.77.203.0:443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}