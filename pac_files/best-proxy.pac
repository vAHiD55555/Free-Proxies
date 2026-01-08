function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 187.111.144.102:8080",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 218.245.5.12:7890",
        "SOCKS 5.199.166.248:9064",
        "SOCKS 178.170.43.129:8081",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 100.27.183.62:8080",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 4.216.195.194:3128",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 65.109.177.138:8080",
        "SOCKS 89.46.249.143:13266",
        "SOCKS 47.76.189.189:8899",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 5.255.117.250:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}