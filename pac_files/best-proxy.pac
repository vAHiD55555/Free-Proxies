function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.205.215.44:4216",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 171.228.154.82:4001",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 27.79.253.210:16000",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 34.48.171.130:33080",
        "SOCKS 115.72.166.233:10017",
        "SOCKS 113.22.184.106:16000",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 1.54.77.124:16000",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 27.71.129.176:16000",
        "SOCKS 103.162.16.7:8080",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 117.74.65.207:443",
        "SOCKS 52.221.222.182:80",
        "SOCKS 222.129.36.92:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}