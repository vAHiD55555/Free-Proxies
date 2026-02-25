function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 83.239.34.82:8080",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 65.108.203.37:28080",
        "SOCKS 192.241.156.17:1080",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 47.83.199.137:58367",
        "SOCKS 109.120.135.230:2030",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 159.65.230.91:20588",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 5.255.99.75:1080",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 159.65.230.91:20053",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}