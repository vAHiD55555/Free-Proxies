function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.120.162.180:58707",
        "SOCKS 159.195.84.83:443",
        "SOCKS 202.62.55.163:1080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 62.60.131.181:8085",
        "SOCKS 37.120.162.180:29933",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 124.248.189.223:1080",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 36.255.98.178:6964",
        "SOCKS 37.120.162.180:38095",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 3.24.178.81:80",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 206.189.130.107:8080",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 194.246.82.89:13447",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 83.147.29.57:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}