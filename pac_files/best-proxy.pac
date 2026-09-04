function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 94.73.200.55:1080",
        "SOCKS 72.195.114.184:4145",
        "SOCKS 45.74.31.30:4092",
        "SOCKS 103.138.144.202:1999",
        "SOCKS 103.142.255.32:1080",
        "SOCKS 174.138.165.206:30698",
        "SOCKS 104.154.186.48:80",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 174.138.162.37:37416",
        "SOCKS 182.163.96.66:1080",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 72.195.34.35:27360",
        "SOCKS 221.176.85.228:1080",
        "SOCKS 45.85.93.15:4567",
        "SOCKS 148.135.34.102:1081",
        "SOCKS 149.248.21.106:8080",
        "SOCKS 109.124.205.176:1080",
        "SOCKS 203.189.153.170:1080",
        "SOCKS 110.235.248.81:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}