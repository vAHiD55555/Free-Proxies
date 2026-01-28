function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.205:5441",
        "SOCKS 36.255.98.167:4863",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 159.8.114.37:80",
        "SOCKS 77.246.108.10:21238",
        "SOCKS 217.77.102.18:3128",
        "SOCKS 36.255.98.160:8303",
        "SOCKS 194.233.73.36:8080",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 193.221.203.121:4145",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 62.60.231.71:56608",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 36.255.98.169:4135",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 62.60.131.178:9080",
        "SOCKS 162.144.74.156:3620",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}