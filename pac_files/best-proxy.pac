function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.126.23.24:2846",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 103.190.120.153:30028",
        "SOCKS 45.70.236.194:999",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 152.53.194.46:8065",
        "SOCKS 27.79.206.211:16000",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 147.75.66.235:9401",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 67.43.236.22:29979",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 20.41.240.154:3128",
        "SOCKS 173.209.63.69:8245",
        "SOCKS 173.209.63.67:8226",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 106.52.2.26:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}