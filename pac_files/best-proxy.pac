function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.68.147.8:3000",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 20.241.208.201:3128",
        "SOCKS 67.43.236.21:22469",
        "SOCKS 47.79.40.185:12462",
        "SOCKS 169.239.181.213:8888",
        "SOCKS 203.189.137.127:1080",
        "SOCKS 212.227.231.183:8080",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 72.10.160.94:16485",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 202.40.178.230:64564",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 174.138.62.182:43715",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}