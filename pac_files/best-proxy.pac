function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 149.202.75.85:36666",
        "SOCKS 3.24.178.81:80",
        "SOCKS 62.60.131.197:4176",
        "SOCKS 12.156.45.155:3128",
        "SOCKS 200.48.35.125:999",
        "SOCKS 62.60.131.185:4180",
        "SOCKS 62.60.131.183:9963",
        "SOCKS 103.189.218.158:1080",
        "SOCKS 36.255.98.180:4481",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 163.5.128.165:14270",
        "SOCKS 167.172.109.12:40825",
        "SOCKS 13.229.47.109:80",
        "SOCKS 62.60.131.194:6100",
        "SOCKS 203.189.153.168:1080",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 62.60.131.204:4288",
        "SOCKS 36.255.98.160:14634",
        "SOCKS 46.10.229.243:7777",
        "SOCKS 193.239.86.249:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}