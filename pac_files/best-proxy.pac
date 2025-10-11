function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.74.86.205:80",
        "SOCKS 177.234.194.30:999",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 175.47.237.95:6128",
        "SOCKS 103.169.26.114:8080",
        "SOCKS 8.211.200.183:9098",
        "SOCKS 94.247.129.244:3128",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 47.79.95.169:1122",
        "SOCKS 38.194.231.70:999",
        "SOCKS 103.192.158.115:46",
        "SOCKS 8.211.195.173:9080",
        "SOCKS 97.76.251.138:8080",
        "SOCKS 103.141.66.78:46",
        "SOCKS 123.128.12.93:9050",
        "SOCKS 157.10.89.203:8880",
        "SOCKS 45.190.52.24:8080",
        "SOCKS 114.80.37.90:3081",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 213.178.39.170:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}