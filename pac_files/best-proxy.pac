function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 54.215.46.91:20087",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 62.60.131.195:4332",
        "SOCKS 124.248.190.47:1080",
        "SOCKS 202.62.37.33:1080",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 62.60.131.191:8323",
        "SOCKS 43.167.247.248:6006",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 202.62.34.102:1080",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 202.62.39.87:1080",
        "SOCKS 203.189.154.200:1080",
        "SOCKS 45.8.88.236:1080",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 134.122.139.69:8866",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 202.96.165.47:7890",
        "SOCKS 31.211.142.115:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}