function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.164.136.189:1080",
        "SOCKS 103.6.235.13:5555",
        "SOCKS 88.218.206.170:22",
        "SOCKS 212.46.208.183:1080",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 119.28.64.217:58367",
        "SOCKS 103.138.144.202:1999",
        "SOCKS 5.79.163.26:1080",
        "SOCKS 84.201.144.65:10001",
        "SOCKS 47.251.87.74:5060",
        "SOCKS 216.22.13.244:1083",
        "SOCKS 173.249.20.169:9060",
        "SOCKS 103.142.255.33:69",
        "SOCKS 175.27.250.85:44106",
        "SOCKS 172.234.12.236:8080",
        "SOCKS 15.235.172.212:65411",
        "SOCKS 154.44.22.203:40001",
        "SOCKS 185.185.80.58:1088",
        "SOCKS 195.133.14.222:49152",
        "SOCKS 160.250.54.6:9000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}