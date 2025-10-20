function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.32.173:57114",
        "SOCKS 202.40.186.66:9090",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 65.109.27.32:1080",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 185.93.89.183:8054",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 137.184.152.66:20201",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 103.17.37.195:1080",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 96.9.211.97:20002",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}