function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.71.131.131:1080",
        "SOCKS 36.255.98.152:10362",
        "SOCKS 13.231.11.85:3128",
        "SOCKS 119.81.71.27:80",
        "SOCKS 67.43.236.20:6691",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 167.172.109.12:40825",
        "SOCKS 5.199.166.248:9115",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 61.171.50.169:6688",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}