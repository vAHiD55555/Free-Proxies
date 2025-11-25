function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.38.155.24:46069",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 157.180.121.252:26149",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 8.217.163.80:1011",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 194.26.135.214:1080",
        "SOCKS 103.189.63.149:53053",
        "SOCKS 120.77.203.0:443",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 47.242.124.53:3356",
        "SOCKS 157.180.121.252:25099",
        "SOCKS 209.141.62.12:5555",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}