function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 141.148.158.143:1080",
        "SOCKS 130.49.171.75:1080",
        "SOCKS 23.133.196.12:9000",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 68.183.52.128:9239",
        "SOCKS 202.62.42.167:1080",
        "SOCKS 45.150.33.211:1081",
        "SOCKS 152.69.205.252:1021",
        "SOCKS 157.230.62.174:1080",
        "SOCKS 107.175.44.109:1080",
        "SOCKS 119.63.134.252:1080",
        "SOCKS 144.91.83.39:9050",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 77.105.142.165:1080",
        "SOCKS 160.250.54.4:9000",
        "SOCKS 154.219.125.240:58367",
        "SOCKS 200.9.155.143:1080",
        "SOCKS 142.93.98.224:1080",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 103.239.52.100:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}