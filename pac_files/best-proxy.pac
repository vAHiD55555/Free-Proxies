function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.239.201.10:58765",
        "SOCKS 159.203.112.20:9062",
        "SOCKS 176.12.74.0:1080",
        "SOCKS 194.233.86.196:443",
        "SOCKS 171.25.158.95:1080",
        "SOCKS 138.2.216.186:1080",
        "SOCKS 160.250.54.4:9000",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 162.243.171.108:9150",
        "SOCKS 167.71.176.220:9057",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 144.124.224.140:1080",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 103.150.206.77:1080",
        "SOCKS 91.98.161.17:1080",
        "SOCKS 85.117.248.36:1080",
        "SOCKS 72.56.106.48:1080",
        "SOCKS 159.203.167.231:9056",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}