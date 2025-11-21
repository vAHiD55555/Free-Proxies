function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.116.159:5556",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 67.43.236.19:26051",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 103.191.218.73:8199",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 152.53.171.242:52929",
        "SOCKS 181.78.202.29:8080",
        "SOCKS 72.10.160.91:9537",
        "SOCKS 31.211.142.115:8192",
        "SOCKS 8.219.59.81:33333",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 72.10.160.92:11383",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 152.53.171.242:49351",
        "SOCKS 120.77.203.0:443",
        "SOCKS 151.241.227.80:1080",
        "SOCKS 147.75.33.99:10611",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}