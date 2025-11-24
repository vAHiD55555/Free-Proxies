function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.157.208.159:80",
        "SOCKS 37.221.16.103:3128",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 103.231.45.189:1080",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 123.128.12.93:9055",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 115.127.132.225:1080",
        "SOCKS 202.47.188.131:8080",
        "SOCKS 185.77.240.82:8080",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 121.165.169.133:8048",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 144.91.78.34:20269",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}