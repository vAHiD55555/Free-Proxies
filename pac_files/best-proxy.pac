function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.133.239.244:16299",
        "SOCKS 181.129.183.19:53281",
        "SOCKS 8.211.42.167:9000",
        "SOCKS 213.230.121.41:1080",
        "SOCKS 103.145.34.9:55443",
        "SOCKS 178.62.75.115:1080",
        "SOCKS 174.138.165.202:33490",
        "SOCKS 47.90.149.238:80",
        "SOCKS 8.215.15.163:9999",
        "SOCKS 8.215.3.250:1080",
        "SOCKS 144.24.111.128:1088",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 96.60.107.42:9050",
        "SOCKS 92.205.186.129:1080",
        "SOCKS 110.235.247.206:1080",
        "SOCKS 45.74.31.30:33999",
        "SOCKS 138.16.182.34:10808",
        "SOCKS 47.90.149.238:31281",
        "SOCKS 8.211.42.167:9080",
        "SOCKS 178.156.206.253:8118",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}