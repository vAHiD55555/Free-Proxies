function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 13.246.35.124:240",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 8.210.89.96:1080",
        "SOCKS 198.175.205.240:8080",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 120.77.203.0:443",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 174.75.211.193:4145",
        "SOCKS 87.107.48.225:1080",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 103.189.218.85:6969",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 103.189.218.83:6969",
        "SOCKS 23.251.62.210:10080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}